package com.bezkoder.springjwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Celda;
import com.bezkoder.springjwt.repository.CeldaRepository;

@Service
public class CeldaService {

    @Autowired
    private CeldaRepository celdaRepository;

    public List<Celda> listarTodos() {
        return celdaRepository.findByEstado();
    }

    public Celda listarById(Long id) {
        return celdaRepository.findById(id).get();
    }

	public Celda agregarGuardia(Celda celdaBody) {
		Optional<Celda> celda = celdaRepository.findById(celdaBody.getId());
        if(celda.isEmpty()) {
            return null;
        }
        Celda celdaBase = celda.get();
        celdaBase.setUsuarioGuardia(celdaBody.getUsuarioGuardia());
        return celdaRepository.save(celdaBase);
	}
    
}
