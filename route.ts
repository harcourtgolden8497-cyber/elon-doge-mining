export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    success: true,
    message: 'Binance Pay order created',
    order: {
      amount: body.amount,
      currency: 'USDT'
    }
  });
}