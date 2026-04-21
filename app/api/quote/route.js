export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();

    return Response.json({
      quote: data[0].q,
    });
  } catch (error) {
    return Response.json({
      quote: "Stay focused and keep going",
    });
  }
}