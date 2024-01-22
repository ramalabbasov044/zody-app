import { baseUrl } from "../shared/constants/base/baseUrl";
import axios from "axios";

const instanceAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-language': `en`
    },
    redirect: 'follow'

});

export const getBlogData = async () => {
    try{
        const response = await instanceAxios.get(`/blog`,{
          headers: {
            'X-language': `en`
          }
        });
    
        return response;
    } catch(error){
        console.log({ error })
    }
};

export const getBlogItem = async (CURRENT_ID,language) => {
  try{
    const response = await instanceAxios.get(`/blog/${CURRENT_ID}`,{
      headers: {
        'X-language': `${language}`
      }
    });
  
    return response;
  } catch(error) {
      console.log({ error })
  }
};

export const contactUs = async (data) => {
  try {
      console.log(data);
      const response = await instanceAxios.post(`/contact`, data);
      return response
  } catch(error) {
      console.log(error)
  }
};
