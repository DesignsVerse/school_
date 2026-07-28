import { prisma } from "@/lib/prisma";
import NoticeBoardClient from "@/components/Noticeboard/NoticeBoardClient";

export default async function NoticeBoard() {
  const notices = await prisma.notice.findMany({
    where: { published: true },
    orderBy: { noticeDate: "desc" },
  });

  const formatted = notices.map((notice) => ({
    id: notice.id,
    title: notice.title,
    summary: notice.summary,
    content: notice.content,
    noticeDate: notice.noticeDate.toISOString(),
  }));

  return <NoticeBoardClient notices={formatted} />;
}