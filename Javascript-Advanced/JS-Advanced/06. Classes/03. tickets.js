function tickets(ticketsArr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
          this.destination = destination;
          this.price = price;
          this.status = status;
        }
      }
      let result = [];
      for (const line of ticketsArr) {
        let [destination, price, status] = line.split("|");
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
      }
      result.sort((a,b)=>{
        if(sortCriteria == "destination"){
           return a.destination.localeCompare(b.destination);
        }else if(sortCriteria == "status"){
            return a.status.localeCompare(b.status);
        }else{
            return a.price - b.price
        }
      })
      return result;
    }
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))
