function list(clients) {
  return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong></li>
    `
  ).join('');
}

function order(clients, property) {
  return clients.sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];
    
    if (typeof valueA === 'string') {
      return valueA.localeCompare(valueB);
    } else {
      return valueA - valueB;
    }
  });
}

function total(clients) {
  return clients.reduce((total, client) => total + client.balance, 0);
}

function info(index) {
  return clients.find(client => client.index === index);
}

function search(query) {
  return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}