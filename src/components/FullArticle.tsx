import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const FullArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!article) return <div className="text-center py-10">Article not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="w-full h-80 object-cover rounded mb-6" />}
      <div className="text-gray-700 mb-6 whitespace-pre-line">{article.content}</div>
      {article.videoLinks && article.videoLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-2">
          {article.videoLinks.filter(Boolean).map((link: string, idx: number) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Watch Video {idx + 1}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FullArticle;
