import axios from 'axios';

/* [Axios] rest api 요청 */
async function transmitAndReceive(host, path, query, headers, data, method, auth) {
    const url = host + path + query;
    let response = ``;
    let error_message = ``;
    
    try {
      if (method === "GET") {
        response = await axios({
          url,
          method,
          headers
        });
      }
      else if (method === "POST") {
        response = await axios({
          url,
          method,
          headers,
          data,
          auth
        });
      } else {
        throw new Error(`${method} 방식으로 요청할 수 없습니다.`)
      }
  
      console.log(`[Axios 송수신 응답]`, response);
  
      // 요청 성공 여부에 따라 처리
      if (response.request.readyState == 4 && response.request.status == 200) {
        return response;
      } else {
        return `[Axios 송수신 실패] ${response.request.status}`;
      }
    } catch (error) {
      error_message = `[Axios 송수신 에러] ${error}`;
      console.error(error_message);
      return error_message;
    }
  }