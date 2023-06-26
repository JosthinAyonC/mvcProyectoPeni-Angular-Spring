package com.bezkoder.springjwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Celda;
import com.bezkoder.springjwt.models.Recluso;
import com.bezkoder.springjwt.payload.response.MessageResponse;
import com.bezkoder.springjwt.repository.CeldaRepository;
import com.bezkoder.springjwt.repository.ReclusoRepository;

@Service
public class ReclusoService {

    @Autowired
    private ReclusoRepository reclusorRepository;
    @Autowired
    private CeldaRepository celdaRepository;

    public List<Recluso> listarTodos() {
        return reclusorRepository.findByEstado();
    }

    public Recluso listarById(Long id) {
        return reclusorRepository.findById(id).get();
    }

    public ResponseEntity<?> insertar(Recluso reclusoBody) {
        Optional<Celda> celda = celdaRepository.findById(reclusoBody.getCelda().getId());
        if (celda.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Celda no encontrada!"));
        }
        Celda celdaxCambiar = celda.get();
        celdaxCambiar.setCapacidad(celdaxCambiar.getCapacidad()-1);
        celdaRepository.save(celdaxCambiar);

        reclusorRepository.save(reclusoBody);
        return ResponseEntity.ok(new MessageResponse("Recluso registrado satisfactoriamente!"));
    }

    public Recluso actualizar(Recluso reclusoBody) {
        Optional<Recluso> reclusoAEditar = reclusorRepository.findById(reclusoBody.getId());
        if (reclusoAEditar.isEmpty()) {
            return null;
        }
        Recluso reclusoPorEditar = reclusoAEditar.get();
        copiarCamposNoNulos(reclusoBody, reclusoPorEditar);
        return reclusorRepository.save(reclusoPorEditar);
    }

    public List<Recluso> eliminar(Long id) {
        Optional<Recluso> reclusoAEliminar = reclusorRepository.findById(id);
        if (reclusoAEliminar.isEmpty()) {
            return null;
        }
        Recluso reclusoPorEliminar = reclusoAEliminar.get();
        Optional <Celda> celda = celdaRepository.findById(reclusoPorEliminar.getCelda().getId());
        if (celda.isEmpty()) {
            return null;
        }
        Celda celdaxCambiar = celda.get();
        celdaxCambiar.setCapacidad(celdaxCambiar.getCapacidad()+1);
        reclusorRepository.deleteById(id);
        return reclusorRepository.findByEstado();
    }

    private void copiarCamposNoNulos(Recluso fuente, Recluso destino) {
        if (fuente.getCedula() != null) {
            destino.setCedula(fuente.getCedula());
        }
        if (fuente.getCargo() != null) {
            destino.setCargo(fuente.getCargo());
        }
        if (fuente.getEdad() != null) {
            destino.setEdad(fuente.getEdad());
        }
        if (fuente.getCelda() != null) {
        destino.setCelda(fuente.getCelda());
        }
        if (fuente.getStatus() != null) {
            destino.setStatus(fuente.getStatus());
        }
    }
    
}
