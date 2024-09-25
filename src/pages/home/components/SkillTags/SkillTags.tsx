import React from 'react';

interface SkillTagProps {
  skill: string;
  className?: string;
}

const SkillTags: React.FC<SkillTagProps> = ({ skill, className = '' }) => {
  return (
    <div className={`gap-2.5 px-3 py-1 rounded-md border border-solid border-neutral-300 ${className}`}>
      {skill}
    </div>
  );
};

export default SkillTags;