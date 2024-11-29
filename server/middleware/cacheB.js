

export default defineEventHandler((event) => {
  /*
    // Set Cache-Control header for all responses
    setHeader(event, 'Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

    // Optional: Add specific logic based on request path or headers
    const path = event.node.req.url;
    if (path?.startsWith('/api')) {
        setHeader(event, 'Cache-Control', 's-maxage=1800, stale-while-revalidate=300'); // Example: API-specific cache
    }*/
  
  const response = event.node.res;

  // Set Cache-Control header
  response.setHeader('Cache-Control', 'public, max-age=3600');

  // Set Expires header
  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + 1); // 1 hour in the future
  response.setHeader('Expires', futureDate.toUTCString());
});
