import { useState } from "react";
import { ScrollToTop } from "./Scroll";

const Swal = require("sweetalert2");

//此包含引入所有文章以及換頁功能
export default function useHandleArticle() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nowLastPage, setNowLastPage] = useState("");

  const [load, setLoad] = useState(false);

  async function FetchDate(API) {
    const res = await fetch(API);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
  }

  async function ChangePrevPage() {
    if (page === 1) {
      alert("目前在第一頁囉");
      return;
    }
    const res = await fetch(prevPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  async function ChangeNextPage() {
    if (page === nowLastPage) {
      alert("最後一頁囉");
      return;
    }
    const res = await fetch(nextPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  function deletArticle(id) {
    Swal.fire({
      title: "確定刪除該篇文章?",
      text: "此動作無法再回復",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("成功", "已成功刪除該篇文章", "success");
      }
    });
  }

  return {
    FetchDate,
    post,
    setPost,
    page,
    setPage,
    prevPage,
    setPrevPage,
    nextPage,
    setNextPage,
    nowLastPage,
    setNowLastPage,
    ChangeNextPage,
    ChangePrevPage,
    deletArticle,
  };
}
