package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Map;

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

import com.bezkoder.springjwt.models.Role;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.services.UserService;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService usuarioService;

    @GetMapping
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<User> listar(){
        return usuarioService.listarTodos();
    }

    @GetMapping("/roles")
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<Role> getRoles(){
        return usuarioService.listarAllRoles();
    } 
    
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public User getUsuarioById(@PathVariable("id") Long id ){
        return usuarioService.listarById(id);
    } 

    @GetMapping("/roles/{roles}")
    // @PreAuthorize("hasRole('VIGILANTE') or hasRole('ADMIN')")
    public List<User> listarPorPorRoles(@PathVariable("roles") String roles){
        return usuarioService.listarUsuariosPorRoles(roles);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> insertar(@RequestBody User usuarioBody){
        return usuarioService.insertar(usuarioBody);
    }
    
    @PutMapping("/editar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public User actualizar(@PathVariable Long id, @RequestBody User usuarioBody){
        
        usuarioBody.setId(id);
        
        return usuarioService.actualizar( usuarioBody);
    }

    @PutMapping("/changepass/{id}")
    public ResponseEntity<?> editarContraseniaPut(@PathVariable("id") Long id, @RequestBody Map<String, String> data) {
        return usuarioService.editarContrasenia(id, data);
    }

    @PutMapping("/eliminar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> eliminar(@PathVariable Long id){
        return usuarioService.eliminar(id);
    } 
}
