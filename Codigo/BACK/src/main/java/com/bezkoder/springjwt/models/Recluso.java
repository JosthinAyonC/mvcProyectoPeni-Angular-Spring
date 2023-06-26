package com.bezkoder.springjwt.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "recluso")
public class Recluso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String cedula;

    private Integer edad;

    @NotBlank
    @Size(max = 50)
    private String cargo;

    private Integer sentencia;

    @Size(max = 1)
    private String status;

    @OneToOne
    @JoinColumn(name = "id_celda")
    private Celda celda;

    public Recluso() {
    }

    public Recluso(Long id, @NotBlank @Size(max = 20) String cedula, @NotBlank Integer edad,
            @NotBlank @Size(max = 20) String cargo, @NotBlank Integer sentencia, @Size(max = 1) String status,
            Celda celda) {
        this.id = id;
        this.cedula = cedula;
        this.edad = edad;
        this.cargo = cargo;
        this.sentencia = sentencia;
        this.status = status;
        this.celda = celda;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Integer getSentencia() {
        return sentencia;
    }

    public void setSentencia(Integer sentencia) {
        this.sentencia = sentencia;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Celda getCelda() {
        return celda;
    }

    public void setCelda(Celda celda) {
        this.celda = celda;
    }

}
