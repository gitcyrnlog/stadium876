import React, { useState, useEffect } from 'react';
import { db, storage, auth, GoogleAuthProvider } from '../../firebase';
import { collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [videoLinks, setVideoLinks] = useState<string[]>(['']);
  const [category, setCategory] = useState('Football');

  // Auth state listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Check Firestore for admin role
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        setIsAdmin(userDoc.exists() && userDoc.data().role === 'admin');
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsub();
  }, []);

  // Google sign-in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  // Handle article submission (now saves to Firestore and uploads image to Storage)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = '';
    try {
      if (image) {
        const imageRef = ref(storage, `article-images/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }
      await addDoc(collection(db, 'articles'), {
        title,
        content,
        createdAt: Timestamp.now(),
        videoLinks: videoLinks.filter(Boolean),
        imageUrl,
        category, // include selected category
      });
      alert('Article submitted to Firebase!');
      setTitle('');
      setContent('');
      setImage(null);
      setVideoLinks(['']);
      setCategory('Football'); // reset category
    } catch (err) {
      alert('Failed to submit article');
    }
  };

  // Replace login form with Google sign-in and admin check
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center">
          <h2 className="text-xl font-bold mb-4">Access Denied</h2>
          <p className="mb-4">You do not have admin privileges.</p>
          <button onClick={handleLogout} className="text-red-600 underline">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Publish New Article</h2>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
          >
            Sign out
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Article Title"
            className="w-full mb-4 px-3 py-2 border rounded"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Category</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            >
              <option value="Football">Football</option>
              <option value="Netball">Netball</option>
              <option value="Basketball">Basketball</option>
              <option value="Track and Field">Track and Field</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          <textarea
            placeholder="Article Content"
            className="w-full mb-4 px-3 py-2 border rounded min-h-[120px]"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Featured Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setImage(e.target.files ? e.target.files[0] : null)}
              className="block w-full"
            />
            {image && <div className="mt-2"><img src={URL.createObjectURL(image)} alt="Preview" className="h-32 rounded" /></div>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Video Links</label>
            {videoLinks.map((link, idx) => (
              <div key={idx} className="flex mb-2">
                <input
                  type="url"
                  placeholder="https://youtube.com/..."
                  className="flex-1 px-3 py-2 border rounded"
                  value={link}
                  onChange={e => {
                    const newLinks = [...videoLinks];
                    newLinks[idx] = e.target.value;
                    setVideoLinks(newLinks);
                  }}
                />
                <button
                  type="button"
                  className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                  onClick={() => setVideoLinks(videoLinks.filter((_, i) => i !== idx))}
                  disabled={videoLinks.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
              onClick={() => setVideoLinks([...videoLinks, ''])}
            >
              + Add Video Link
            </button>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition">Publish Article</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
