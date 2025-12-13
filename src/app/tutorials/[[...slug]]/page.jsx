import Title from '@/components/Title';
import React from 'react';

export default async function TutorialPages({ params }) {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];
  console.log(slug)

  // src/app/tutorials/[technology]/[topic]/pages/[page_no]/[subject]

  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p>Page No: {page_no}</p>
      </div>
    </div>
  );
}
