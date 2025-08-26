select sum("amount") as "totalPaid",
      "firstName",
      "lastName"
from "payments"
join "customers" using ("customerId")
group by "customerId"
order by "totalPaid" desc;
