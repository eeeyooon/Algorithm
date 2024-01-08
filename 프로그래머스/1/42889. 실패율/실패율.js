function solution(N, stages) {
    let failureRates = [];
    let totalPlayer = stages.length;
    
  for (let i=1; i<=N; i++)  {
      let failedPlayer = stages.filter(v=> v=== i).length;
      let failureRatio = 0;
      
      if (failedPlayer === 0) failureRatio = 0;
      else failureRatio = (failedPlayer) / totalPlayer;
      
      totalPlayer -= failedPlayer;
      
        failureRates.push({stage:i, rate:(failureRatio)})
        
  }  
    
    failureRates.sort((a,b) => b.rate - a.rate);
    return failureRates.map(v=>v.stage);
}