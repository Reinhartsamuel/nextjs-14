export async function GET(request) {

    const result = await fetch("https://fakestoreapi.com/products");

    const data = await result.json()
    return Response.json({
        status: true,
        data: data
    })
}