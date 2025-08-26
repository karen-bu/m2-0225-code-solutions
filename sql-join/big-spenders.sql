select "firstName",
      "lastName",
      "amount" as "paymentAmount"
from "customers"
join "payments" using ("customerId")
order by "paymentAmount" desc
limit 10;
