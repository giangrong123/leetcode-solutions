/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) 
{
  const n = questions.length;
  let dp = new Array(n).fill(0);

  for(let i = n - 1; i >= 0; i--) 
  {
    const points = questions[i][0];
    const brainpower = questions[i][1];
    const next = i + brainpower + 1;
    
    let doThis;
    if(next < n) 
    {
      doThis = points + dp[next];
    } 
    else 
    {
      doThis = points;
    }
    
    const skip = dp[i + 1] || 0;

    dp[i] = Math.max(doThis, skip);
  }
  return dp[0];
};
