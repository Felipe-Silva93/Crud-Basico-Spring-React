package meu.crud.crud.seguranca;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import meu.crud.crud.usuario.Usuario;

public class UserDetailImplemente implements UserDetails {

	private static final long serialVersionUID = 1L;
	
	private String userName;
	private String password;
	private List<GrantedAuthority> authorities;
	
	
	
	public UserDetailImplemente(Usuario usuario) {
		
		this.userName = usuario.getEmail();
		this.password = usuario.getSenha();
		
	}
	//  autorizaçoes que vai para dentro o spring e fica no mesmo guardado
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return authorities;
	}

	@Override
	public String getPassword() {
		
		return password;
	}

	@Override
	public String getUsername() {
		
		return userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		// para o token não expirar vai receber o valor true
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// nunca bloquear o usuario
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// nunca expira
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return true;
	}
	
}
