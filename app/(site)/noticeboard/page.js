import NoticeBoardClient from "@/components/Noticeboard/NoticeBoardClient";
import { getPublishedNotices } from "@/lib/cms-data";

export const dynamic = "force-dynamic";

export default async function NoticeBoard() {
  const notices = await getPublishedNotices();
  return <NoticeBoardClient notices={notices} />;
}