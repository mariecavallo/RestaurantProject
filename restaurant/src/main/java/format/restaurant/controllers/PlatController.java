package format.restaurant.controllers;

import format.restaurant.repository.PlatRepository;
import format.restaurant.model.Plat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)

@RestController

public class PlatController {

    @Autowired
    private PlatRepository platRepository;

    @RequestMapping(value="/Plats", method=RequestMethod.GET)
    public List<Plat> listePlats() {
        return platRepository.findAll();
    }

    @GetMapping(value = "/Plats/{id}")
    public Plat getPlat(@PathVariable Long id) {
        return platRepository.findById(id).get();
    }

    @PutMapping(value = "/Plats")
    public Plat updatePlat(@RequestBody Plat plat){
        return  platRepository.save(plat);
    }

    @PostMapping(value = "/Plats")
    public void addPlat(@RequestBody Plat plat) {
        platRepository.save(plat);
    }

    @DeleteMapping (value = "/Plats/{id}")
    public void supprimerPlat(@PathVariable Long id){
        platRepository.deleteById(id);
    }


}

