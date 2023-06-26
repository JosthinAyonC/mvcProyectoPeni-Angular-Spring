package com.bezkoder.springjwt.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "pabellon")
public class Pabellon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 1)
    private String status;

    @NotBlank
    private long cant_celdas;

    @OneToOne
    @JoinColumn(name = "id_vigilante")
    private User usuarioVigilante;

    public Pabellon(Long id, @NotBlank @Size(max = 1) String status, User usuarioVigilante) {
        this.id = id;
        this.status = status;
        this.usuarioVigilante = usuarioVigilante;
    }

    public Pabellon() {
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

    public User getUsuarioVigilante() {
        return usuarioVigilante;
    }

    public void setUsuarioVigilante(User usuarioVigilante) {
        this.usuarioVigilante = usuarioVigilante;
    }

}
