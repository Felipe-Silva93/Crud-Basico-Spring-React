package meu.crud.crud.repository;




import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import meu.crud.crud.usuario.Usuario;

@Repository
public interface CrudRepository extends JpaRepository<Usuario, Long> {
	
	public List<Usuario> findAllByNomeContainingIgnoreCase(String nome);
	public Optional<Usuario>findByEmail(String email);
}
