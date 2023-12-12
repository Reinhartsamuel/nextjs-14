import { gineeApi } from "@/services/gineeApi";

export async function POST(request) {


    const data = await request.json();
    
    try {
        const res = await gineeApi(data.httpMethod, data.requestUri, data.requestData);
          
    return Response.json({
        status: true,
        data:  res
    })
    } catch (error) {
       console.log(error, 'ini erro')
       return Response.json({status: false, error: error.message})
    }
   



  
}