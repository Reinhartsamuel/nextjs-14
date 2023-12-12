import { gineeApi } from "@/services/gineeApi";

export async function POST(req) {

    // const result = await fetch("https://fakestoreapi.com/products");

    const { httpMethod, requestUri, requestData } = req.body;
    



    console.log(request.body, 'yyyy')

    
    try {
        const res = await gineeApi(httpMethod, requestUri, requestData);
        console.log('Data from API:', res);
    } catch (error) {
       console.log(error, 'ini erro')
       return Response.json({status: false, error: error.message})
    }
   



    
    return Response.json({
        status: true,
        data: res
    })
}