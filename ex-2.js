// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; // ถ้ามากกว่า 4000
let isWeekday = true; // ถ้าเป็น จันทร์ ถึง ศุกร์
let hasBoughtProductFromITCategory = true; // สินค้า it
let hasAttendedDiscountEvent = true; // เคยเข้าร่วมงานลดราคา
let isPlatinum = true; // สมาชิก platinum

let hasPromotion = true; // ได้รับส่วนลด

console.log(hasPromotion);

hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent && !isPlatinum; // john

console.log(hasPromotion);
