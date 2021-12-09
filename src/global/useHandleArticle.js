import { useState } from "react";
import { scrollToTop } from "./scroll";
import { playgames, fetchAPIName, hinduhope } from "./API";

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
    setLoad(true);
    const res = await fetch(API);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    setLoad(false);
  }

  async function gameInformationPageArticle() {
    setLoad(true);
    const res = await fetch(playgames);
    const { data } = await res.json();
    const GameInformation = data.GameInformation.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(GameInformation.join()));
  }

  async function sportsPageArticle() {
    setLoad(true);
    const res = await fetch(playgames);
    const { data } = await res.json();
    const Sports = data.Sports.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Sports.join()));
  }

  async function vehiclesPageArticle() {
    setLoad(true);
    const res = await fetch(playgames);
    const { data } = await res.json();
    const Vehicles = data.Vehicles.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Vehicles.join()));
  }

  async function boutiquesPageArticle() {
    setLoad(true);
    const res = await fetch(hinduhope);
    const { data } = await res.json();
    const Boutiques = data.Boutiques.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Boutiques.join()));
  }

  async function hinduVehiclesPageArticle() {
    setLoad(true);
    const res = await fetch(hinduhope);
    const { data } = await res.json();
    const Vehicles = data.Vehicles.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Vehicles.join()));
  }

  async function worldNewsPageArticle() {
    setLoad(true);
    const res = await fetch(hinduhope);
    const { data } = await res.json();
    const WorldNews = data.WorldNews.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(WorldNews.join()));
  }

  async function financialNewsPageArticle() {
    setLoad(true);
    const res = await fetch(hinduhope);
    const { data } = await res.json();
    const FinancialNews = data.FinancialNews.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(FinancialNews.join()));
  }

  async function ChangePrevPage() {
    if (page === 1) {
      alert("目前在第一頁囉");
      return;
    }
    setLoad(true);
    const res = await fetch(prevPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    scrollToTop();
    setLoad(false);
  }

  async function ChangeNextPage() {
    if (page === nowLastPage) {
      alert("最後一頁囉");
      return;
    }
    setLoad(true);
    const res = await fetch(nextPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    scrollToTop();
    setLoad(false);
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
    load,
    gameInformationPageArticle,
    sportsPageArticle,
    vehiclesPageArticle,
    boutiquesPageArticle,
    hinduVehiclesPageArticle,
    worldNewsPageArticle,
    financialNewsPageArticle,
  };
}
