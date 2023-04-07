function constructionCrew(worker) {
 if(worker.dizziness == true){
    worker.levelOfHydrated += 0.1*worker.weight*worker.experience;
    worker.dizziness = false;
    return worker;
 }else{
     return worker;
 }
}
console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));
