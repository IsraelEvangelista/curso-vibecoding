import { useState } from 'react';
import {
  MessageSquare,
  Code,
  Heart,
  Plus,
  Search,
  Users,
  Eye,
  Star
} from 'lucide-react';
import { Card, CardContent, Badge, Button, Avatar, Input } from '@/components/ui';
import { mockForumTopics, mockGalleryPosts, mockUsers } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

export function Comunidade() {
  const [activeTab, setActiveTab] = useState<'forum' | 'gallery'>('forum');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = mockForumTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = mockGalleryPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Comunidade Vibe Coding
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Compartilhe conhecimentos, tire dúvidas e inspire-se com os projetos dos colegas
        </p>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-white dark:bg-[#0a0a0a]">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {mockForumTopics.length}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Tópicos no Fórum</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0a0a0a]">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Code className="h-4 w-4 text-purple-600" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {mockGalleryPosts.length}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Projetos na Galeria</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0a0a0a]">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {mockUsers.length}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Membros Ativos</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('forum')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'forum'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Fórum de Dúvidas</span>
              <Badge variant="secondary">{mockForumTopics.length}</Badge>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'gallery'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Galeria de Projetos</span>
              <Badge variant="secondary">{mockGalleryPosts.length}</Badge>
            </div>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'forum' && (
        <div className="space-y-6">
          {/* Create New Topic Button */}
          <div className="flex justify-end">
            <Button className="btn-neon flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Novo Tópico</span>
            </Button>
          </div>

          {/* Forum Topics */}
          <div className="space-y-4">
            {filteredTopics.map((topic) => (
              <Card key={topic.id} className="bg-white dark:bg-[#0a0a0a] hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar
                      src={topic.author.avatar}
                      alt={topic.author.name}
                      className="h-10 w-10"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                          {topic.title}
                        </h3>
                        {topic.isPinned && <Star className="h-4 w-4 text-yellow-500" />}
                        {topic.replies.some(r => r.isFromModerator) && (
                          <Badge variant="secondary" className="text-xs">Resposta do Moderador</Badge>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {topic.content}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <span>{topic.author.name}</span>
                          <span>•</span>
                          <span>{formatDate(topic.createdAt)}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{topic.replies.length} respostas</span>
                        </div>

                        {topic.tags.length > 0 && (
                          <div className="flex items-center space-x-2">
                            {topic.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      {topic.replies.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>Última resposta:</span>
                            <span className="font-medium">
                              {topic.replies[topic.replies.length - 1].author.name}
                            </span>
                            <span>•</span>
                            <span>{formatDate(topic.replies[topic.replies.length - 1].createdAt)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="space-y-6">
          {/* Create New Post Button */}
          <div className="flex justify-end">
            <Button className="btn-neon flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Compartilhar Projeto</span>
            </Button>
          </div>

          {/* Gallery Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white dark:bg-[#0a0a0a] hover:shadow-lg transition-shadow">
                <div className="relative">
                  {/* Screenshot */}
                  {post.screenshots.length > 0 ? (
                    <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden">
                      <img
                        src={post.screenshots[0]}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      {post.isFeatured && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Destaque
                          </Badge>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-t-lg flex items-center justify-center relative">
                      <Code className="h-16 w-16 text-primary-400 opacity-50" />
                      {post.isFeatured && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Destaque
                          </Badge>
                        </div>
                      )}
                    </div>
                  )}

                  <CardContent className="p-4">
                    {/* Author */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Avatar
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-6 w-6"
                      />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Language Badge */}
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        <Code className="h-3 w-3 mr-1" />
                        {post.language}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments.length}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{Math.floor(Math.random() * 100) + 10}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
