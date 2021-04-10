package com.example.demo;
import org.springframework.web.bind.annotation.*;

@RestController
public class ChoresController {
    private final ChoresRepository repo;

    public ChoresController(ChoresRepository repo) {
        this.repo = repo;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/chores")
    public Chores createChore(@RequestBody Chores chore){
        return this.repo.save(chore);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/chores")
    public Iterable<Chores> allChores(){
        return this.repo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/chores/{id}")
    public String deleteChore(@PathVariable Long id){
        this.repo.deleteById(id);
        return "Chore has been deleted";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PatchMapping("/chores/{id}")
    public Chores deleteChore(@RequestBody Chores chores, @PathVariable Long id){
        if(this.repo.existsById(id)){
            Chores oldChore = this.repo.findById(id).get();
            oldChore.setChore(chores.getChore());
            oldChore.setCompleted(chores.getCompleted());
            oldChore.setCompleted(chores.getCompleted());
            return this.repo.save(oldChore);
        } else{
            return this.repo.save(chores);
        }
    }




}
