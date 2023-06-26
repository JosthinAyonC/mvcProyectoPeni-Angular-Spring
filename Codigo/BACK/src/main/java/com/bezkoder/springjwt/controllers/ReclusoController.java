package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Recluso;
import com.bezkoder.springjwt.services.ReclusoService;

@RestController
@RequestMapping("/api/recluso")
@CrossOrigin(origins = "*")
public class ReclusoController {
    @Autowired
    private ReclusoService reclusoService;

    @GetMapping
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<Recluso> listar(){
        return reclusoService.listarTodos();
    }
    
    @GetMapping("/{id}")
    public Recluso getReclusoById(@PathVariable("id") Long id ){
        return reclusoService.listarById(id);
    } 

    @PostMapping
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public ResponseEntity<?> insertar(@RequestBody Recluso reclusoBody){
        return reclusoService.insertar(reclusoBody);
    }
    
    @PutMapping("/editar/{id}")
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public Recluso actualizar(@PathVariable Long id, @RequestBody Recluso reclusoBody){
        reclusoBody.setId(id);
        return reclusoService.actualizar( reclusoBody);
    }

    @PutMapping("/eliminar/{id}")
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<Recluso> eliminar(@PathVariable Long id){
        return reclusoService.eliminar(id);
    } 
}
