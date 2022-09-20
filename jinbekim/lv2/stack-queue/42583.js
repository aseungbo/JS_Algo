/**
 * 다리를 지나는 트럭
 */
 function solution(bridge_length, weight, truck_weights) {
  var time = 1;

  const queue = Array.from({length: bridge_length}).fill(0);
  let idx = 0;
  let sum = truck_weights[idx];
  queue.unshift(truck_weights[idx]);
  queue.pop();
  idx += 1;

  while(idx < truck_weights.length) {
      time += 1;
      const doneTruck = queue.pop();
      if (doneTruck !== 0) {
          sum -= doneTruck;
      }
      if (sum + truck_weights[idx] <= weight) {
          sum += truck_weights[idx];
          queue.unshift(truck_weights[idx]);
          idx += 1;
      } else {
          // find last truck & time lapse
          queue.unshift(0);
      }
  }
  const lastTruck = queue.findIndex((val) => val !== 0);
  time += bridge_length - lastTruck;

  return time;
}
