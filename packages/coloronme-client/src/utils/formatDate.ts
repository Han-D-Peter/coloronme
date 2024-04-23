export const formatDate = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = diffMs / (1000 * 60);
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    const minutes = Math.floor(diffMinutes);
    return minutes <= 0 ? '방금 전' : `${minutes}분 전`;
  }

  if (diffHours < 24) {
    const hours = Math.floor(diffHours);
    return `${hours}시간 전`;
  }

  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
