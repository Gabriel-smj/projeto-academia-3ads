package com.powerfit.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/membro")
@CrossOrigin(origins = "http://localhost:5173")
public class MembroController {

    private static final Logger log = LoggerFactory.getLogger(MembroController.class);
    private final JdbcTemplate jdbcTemplate;

    public MembroController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Membro>> listarMembros() {

        String sql = "SELECT id, nome, dtNascimento AS dataNascimento, email, telefone, plano FROM membro";

        List<Membro> membros = jdbcTemplate.query(sql,
                new BeanPropertyRowMapper<>(Membro.class)
        );

        return ResponseEntity.status(200).body(membros);
    }


    @PostMapping
    public ResponseEntity<Membro> cadastrarMembros(@RequestBody Membro membro) {

        if (
                membro.getNome() == null ||
                        membro.getNome().isBlank() ||
                        membro.getDataNascimento() == null ||
                        membro.getEmail() == null ||
                        membro.getEmail().isBlank() ||
                        membro.getTelefone() == null ||
                        membro.getTelefone().isBlank() ||
                        membro.getPlano() == null ||
                        membro.getPlano().isBlank()

        ) {
            return ResponseEntity.status(400).build();
        }



        String sql = "INSERT INTO membro(nome, dtNascimento, email, telefone, plano) VALUES(?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            ps.setString(1, membro.getNome());
            ps.setDate(2, java.sql.Date.valueOf(membro.getDataNascimento()));
            ps.setString(3, membro.getEmail());
            ps.setString(4, membro.getTelefone());
            ps.setString(5, membro.getPlano());

            return ps;
        }, keyHolder);

        Number idGerado = keyHolder.getKey();
        if (idGerado != null) {
            membro.setId(idGerado.intValue());
        }

        return ResponseEntity.status(201).body(membro);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Membro> buscarPorId(@PathVariable Integer id) {

        if (id == null || id <= 0) {
            return ResponseEntity.status(400).build();
        }

        String sql = "SELECT id, nome, dtNascimento AS dataNascimento, email, telefone, plano FROM membro WHERE id = ?";
        Membro membros = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Membro.class), id);

        if (membros == null) {
            return ResponseEntity.status(404).build();
        }

        return ResponseEntity.status(200).body(membros);
    }

    @GetMapping("nome/{nome}")
    public ResponseEntity<List<Membro>> buscarPorNome(@PathVariable String nome) {

        if (nome == null || nome.isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sql = "SELECT id, nome, dtNascimento AS dataNascimento, email, telefone, plano FROM membro WHERE nome LIKE ?";
        List<Membro> membros = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Membro.class), "%" + nome + "%");

        return ResponseEntity.status(200).body(membros);
    }

    @GetMapping("email/{email}")
    public ResponseEntity<List<Membro>> buscarPorEmail(@PathVariable String email) {

        if (email == null || email.isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sql = "SELECT id, nome, dtNascimento AS dataNascimento, email, telefone, plano FROM membro WHERE email LIKE ?";
        List<Membro> membros = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Membro.class), "%" + email + "%");

        return ResponseEntity.status(200).body(membros);
    }



    @PutMapping("/{id}")
    public ResponseEntity<Membro> atualizarPorId(@PathVariable Integer id, @RequestBody Membro membro) {

        if (id == null || id <= 0) {
            return ResponseEntity.status(400).body(membro);
        }

        String sql = "UPDATE membro SET nome = ?, dtNascimento = ?, email = ?, telefone = ?, plano = ? WHERE id = ?";
        int linhasAfetadas = jdbcTemplate.update(sql,
                membro.getNome(),
                java.sql.Date.valueOf(membro.getDataNascimento()),
                membro.getEmail(),
                membro.getTelefone(),
                membro.getPlano(),
                id
        );

        if (linhasAfetadas == 0) {
            return ResponseEntity.status(404).body(membro);
        }

        return ResponseEntity.status(200).body(membro);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarPorId(@PathVariable Integer id) {

        if (id == null || id <= 0) {
            return ResponseEntity.status(400).body("ID inválido");
        }

        String sql = "DELETE FROM membro WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);

        if (rowsAffected == 0) {
            return ResponseEntity.status(404).body("Membro não encontrado");
        }

        return ResponseEntity.status(200).body("Membro deletado com sucesso");
    }
}
