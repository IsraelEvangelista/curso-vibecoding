import { GalleryPost } from "@/types";
import { mockUsers } from "./users";

// Mock de Posts da Galeria
export const mockGalleryPosts: GalleryPost[] = [
  {
    id: "post1",
    title: "Bot de WhatsApp para atendimento",
    description:
      "Desenvolvi um bot usando n8n e GLM 4.6 para automatizar o atendimento ao cliente.",
    author: mockUsers[2],
    challengeId: "challenge1",
    code: `// Workflow de atendimento n8n
{
  "nodes": [
    {
      "name": "Trigger WhatsApp",
      "type": "n8n-nodes-base.webhook",
      "parameters": {}
    },
    {
      "name": "Processar com GLM-4.6",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.zhipuai.ai/v4/chat/completions"
      }
    }
  ]
}`,
    language: "json",
    screenshots: [],
    likes: 12,
    comments: [
      {
        id: "comment1",
        content:
          "Muito interessante! Como você lidou com a autenticação do WhatsApp?",
        author: mockUsers[0],
        createdAt: "2024-03-15T16:00:00Z",
        likes: 2,
      },
    ],
    createdAt: "2024-03-14T11:30:00Z",
    isFeatured: true,
  },
  {
    id: "post2",
    title: "Dashboard de analytics com Supabase",
    description:
      "Criei um dashboard interativo usando React e Supabase para análise de dados.",
    author: mockUsers[0],
    challengeId: "challenge2",
    code: `// Componente de Dashboard
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    supabase
      .from('analytics')
      .select('*')
      .order('created_at', { ascending: false })
      .then(setData);
  }, []);

  return <div>{/* JSX do dashboard */}</div>;
}`,
    language: "typescript",
    screenshots: [],
    likes: 8,
    comments: [],
    createdAt: "2024-03-13T20:15:00Z",
    isFeatured: false,
  },
];
