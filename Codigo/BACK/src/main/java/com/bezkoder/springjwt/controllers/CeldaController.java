package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Celda;
import com.bezkoder.springjwt.services.CeldaService;

@RestController
@RequestMapping("/api/celda")
@CrossOrigin(origins = "*")
public class CeldaController {
    @Autowired
    private CeldaService celdaService;;

    @GetMapping
    // @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<Celda> listar(){
        return celdaService.listarTodos();
    }

    @GetMapping("/{id}")
    // @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public Celda getCeldaById(@PathVariable("id") Long id ){
        return celdaService.listarById(id);
    }
     
    @PutMapping("agregarGuardia/{id}")
    // @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public Celda asignacionGuardia(@PathVariable("id") Long id, @RequestBody Celda celdaBody){
        celdaBody.setId(id);
        return celdaService.agregarGuardia(celdaBody);
    } 
}
