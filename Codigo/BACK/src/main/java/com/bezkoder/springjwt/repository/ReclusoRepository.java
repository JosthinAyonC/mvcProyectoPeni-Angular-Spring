package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bezkoder.springjwt.models.Recluso;


public interface ReclusoRepository extends JpaRepository<Recluso, Long>{
  
    @Modifying
    @Query("UPDATE Recluso u SET u.status = null WHERE u.id = ?1")
    public void deleteById(Long id);
  
    @Query("SELECT u FROM Recluso u WHERE u.status != null ORDER BY u.sentencia ASC")
    public List<Recluso> findByEstado();
}
