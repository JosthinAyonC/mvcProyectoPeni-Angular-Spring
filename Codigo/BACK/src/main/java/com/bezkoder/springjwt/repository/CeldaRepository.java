package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bezkoder.springjwt.models.Celda;

public interface CeldaRepository extends JpaRepository<Celda, Long> {

    @Query("SELECT c FROM Celda c WHERE c.status != null ORDER BY c.pabellon ASC")
    public List<Celda> findByEstado();
    
}
