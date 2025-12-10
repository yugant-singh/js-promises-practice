# JavaScript Promises -- Practice Tasks

Yeh repository JavaScript Promises ko samajhne ke liye banaye gaye basic
practical exercises contain karti hai.\
Har question asynchronous behavior, resolve/reject handling aur chaining
ko demonstrate karta hai.

------------------------------------------------------------------------

## 📌 Q1 --- Basic Promise (Resolve after 2 sec)

-   2 second baad `Data Received` return hota hai.
-   Simple resolve test.

------------------------------------------------------------------------

## 📌 Q2 --- Random Number Promise

-   Random number 1--10 generate hota hai.
-   Number \> 5 → resolve\
-   Number ≤ 5 → reject

------------------------------------------------------------------------

## 📌 Q3 --- Promise Chaining Example

Sequential steps:\
1. After 1 sec → "Step 1"\
2. `.then()` → "Step 2"\
3. Next `.then()` → "Step 3"

------------------------------------------------------------------------

## 📌 Q4 --- Promise Rejection Handling

-   Test to confirm `.catch()` is triggered when promise gets rejected.

------------------------------------------------------------------------

## 📌 Q5 --- Promise.all Example

Two promises:\
- P1 → resolves after 1 sec\
- P2 → resolves after 3 sec\
- `Promise.all()` waits for both and then returns combined array.

------------------------------------------------------------------------

## 📁 File Included

-   script.js --- All questions with solutions.

------------------------------------------------------------------------

## ▶️ Run Instructions

### Node.js

``` bash
node script.js
```

### Browser

Simply include the script inside `<script>` tag.

------------------------------------------------------------------------

## 📚 Concepts Practiced

-   Promise creation
-   Resolve & reject
-   Async timing
-   Promise chaining
-   Error handling (.catch)
-   Promise.all()
