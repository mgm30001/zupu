'use client';

import { useState, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select } from './select';
import { toast } from './use-toast';

interface Member {
  id: string;
  name: string;
  gender: 'MALE' | 'FEMALE';
}

interface RelationshipEditorProps {
  memberId: string;
  initialRelationships?: {
    parents?: Member[];
    spouse?: Member;
    siblings?: Member[];
  };
  onUpdate: () => void;
}

export function RelationshipEditor({ memberId, initialRelationships, onUpdate }: RelationshipEditorProps) {
  const [parents, setParents] = useState<Member[]>(initialRelationships?.parents || []);
  const [spouse, setSpouse] = useState<Member | null>(initialRelationships?.spouse || null);
  const [siblings, setSiblings] = useState<Member[]>(initialRelationships?.siblings || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Member[]>([]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    const searchMembers = async () => {
      try {
        const response = await fetch(`/api/members/search?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) throw new Error('搜索失败');
        const data = await response.json();
        setSearchResults(data.filter((member: Member) => member.id !== memberId));
      } catch (error) {
        console.error('搜索成员时出错:', error);
        toast({
          title: '错误',
          description: '搜索成员时发生错误',
          variant: 'destructive',
        });
      }
    };

    const debounceTimer = setTimeout(searchMembers, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, memberId]);

  const handleAddRelationship = async (type: 'parent' | 'spouse' | 'sibling', targetMember: Member) => {
    try {
      const response = await fetch('/api/relationships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          memberId,
          targetId: targetMember.id,
        }),
      });

      if (!response.ok) throw new Error('添加关系失败');

      switch (type) {
        case 'parent':
          if (parents.length < 2) setParents([...parents, targetMember]);
          break;
        case 'spouse':
          setSpouse(targetMember);
          break;
        case 'sibling':
          setSiblings([...siblings, targetMember]);
          break;
      }

      onUpdate();
      toast({
        title: '成功',
        description: '关系添加成功',
      });
    } catch (error) {
      console.error('添加关系时出错:', error);
      toast({
        title: '错误',
        description: '添加关系时发生错误',
        variant: 'destructive',
      });
    }
  };

  const handleRemoveRelationship = async (type: 'parent' | 'spouse' | 'sibling', targetId: string) => {
    try {
      const response = await fetch(`/api/relationships/${type}/${memberId}/${targetId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('删除关系失败');

      switch (type) {
        case 'parent':
          setParents(parents.filter(p => p.id !== targetId));
          break;
        case 'spouse':
          setSpouse(null);
          break;
        case 'sibling':
          setSiblings(siblings.filter(s => s.id !== targetId));
          break;
      }

      onUpdate();
      toast({
        title: '成功',
        description: '关系删除成功',
      });
    } catch (error) {
      console.error('删除关系时出错:', error);
      toast({
        title: '错误',
        description: '删除关系时发生错误',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>搜索成员</Label>
        <Input
          type="text"
          placeholder="输入成员姓名搜索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchResults.length > 0 && (
          <ul className="border rounded-md divide-y">
            {searchResults.map((member) => (
              <li key={member.id} className="p-3 flex items-center justify-between">
                <span>{member.name}</span>
                <div className="space-x-2">
                  {parents.length < 2 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddRelationship('parent', member)}
                    >
                      添加为父母
                    </Button>
                  )}
                  {!spouse && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddRelationship('spouse', member)}
                    >
                      添加为配偶
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddRelationship('sibling', member)}
                  >
                    添加为兄弟姐妹
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">现有关系</h3>
        
        <div>
          <h4 className="font-medium mb-2">父母</h4>
          {parents.length > 0 ? (
            <ul className="space-y-2">
              {parents.map((parent) => (
                <li key={parent.id} className="flex items-center justify-between p-2 border rounded">
                  <span>{parent.name}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveRelationship('parent', parent.id)}
                  >
                    删除
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">暂无父母关系</p>
          )}
        </div>

        <div>
          <h4 className="font-medium mb-2">配偶</h4>
          {spouse ? (
            <div className="flex items-center justify-between p-2 border rounded">
              <span>{spouse.name}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveRelationship('spouse', spouse.id)}
              >
                删除
              </Button>
            </div>
          ) : (
            <p className="text-gray-500">暂无配偶关系</p>
          )}
        </div>

        <div>
          <h4 className="font-medium mb-2">兄弟姐妹</h4>
          {siblings.length > 0 ? (
            <ul className="space-y-2">
              {siblings.map((sibling) => (
                <li key={sibling.id} className="flex items-center justify-between p-2 border rounded">
                  <span>{sibling.name}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveRelationship('sibling', sibling.id)}
                  >
                    删除
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">暂无兄弟姐妹关系</p>
          )}
        </div>
      </div>
    </div>
  );
}