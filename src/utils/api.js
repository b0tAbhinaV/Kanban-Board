export async function fetchTickets() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching tickets:', error);
      return []; // Return an empty array in case of failure
    }
  }
  