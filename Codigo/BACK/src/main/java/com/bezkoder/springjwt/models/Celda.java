package com.bezkoder.springjwt.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "celda", uniqueConstraints = { 
    @UniqueConstraint(columnNames = "name")})
public class Celda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 1)
    private String status;

    @NotBlank
    @Size(max = 50)
    private String name;

    private Long capacidad;

    @OneToOne
    @JoinColumn(name = "id_pabellon")
    private Pabellon pabellon;

    @OneToOne
    @JoinColumn(name = "id_guardia")
    private User usuarioGuardia;

    public Celda(Long id, @NotBlank @Size(max = 1) String status, @NotBlank Long capacidad, Pabellon pabellon, String name,
            User usuarioGuardia) {
        this.id = id;
        this.status = status;
        this.capacidad = capacidad;
        this.pabellon = pabellon;
        this.usuarioGuardia = usuarioGuardia;
        this.name = name;
    }

    public Celda() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getCapacidad() {
        return capacidad;
    }
    

    public void setCapacidad(Long capacidad) {
        this.capacidad = capacidad;
    }

    public Pabellon getPabellon() {
        return pabellon;
    }

    public void setPabellon(Pabellon pabellon) {
        this.pabellon = pabellon;
    }

    public User getUsuarioGuardia() {
        return usuarioGuardia;
    }

    public void setUsuarioGuardia(User usuarioGuardia) {
        this.usuarioGuardia = usuarioGuardia;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
