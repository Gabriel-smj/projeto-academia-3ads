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
}
