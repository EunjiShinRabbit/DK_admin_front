import axios from "axios";
const HEADER = 'application/json';
const BASE_URL = "http://localhost:8300/developerKirby/";

const api = {
  // 회원 정보 조회
  memberInfo: async function() {
    const regCmd = {
      cmd : "MemberInfo" //조회는 이름만 날려주면됨
    }
    return await axios.post(BASE_URL + "AdminMemberServlet", regCmd, HEADER);
  },
  adInfo : async function() {
    const adCmd ={
      cmd :  "AdInfo"
    }
    return await axios.post(BASE_URL + "AdminAdServlet", adCmd, HEADER);
  },
  adminAdDelete: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //삭제할 타겟들 날려줌
    }
    return await axios.post(BASE_URL + "AdminAdDeleteServelt", regCmd, HEADER);
  },
  // adminAdSend: async function() {
  //   const regCmd = {
  //     target : localStorage.getItem("target") //삭제할 타겟들 날려줌
  //   }
  //   return await axios.post(BASE_URL + "AdminAdDeleteServelt", regCmd, HEADER);
  // },

  adminAdUpdateInfo: async function(ad_num) {
  const regCmd = {
    ad_num: ad_num
  }
  return await axios.get(BASE_URL + "AdminUpdateInfoServlet"
  // {params:{
  //   ad_num : ad_num
  // }
// },
   ,regCmd, HEADER);
},
  adminAdUpdate: async function(ad_num, ad_name, ad_url) {
    const adObj = {
      ad_num: ad_num,
      ad_name: ad_name,
      ad_url: ad_url
    };

    return await axios.post(BASE_URL + "AdminAdUpdateServlet", adObj, HEADER);
  },
  adminAdAdd: async function(ad_name, ad_url) {
    const adObj = {
      ad_name: ad_name,
      ad_url: ad_url
    };

    return await axios.post(BASE_URL + "AdminAdAddServlet", adObj, HEADER);
  }
  };

export default api;