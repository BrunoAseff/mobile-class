package org.example.project

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay

@Composable
fun App() {
    var texto by remember { mutableStateOf("") }
    var mensagemExibida by remember { mutableStateOf("") }
    var visivel by remember { mutableStateOf(false) }

    LaunchedEffect(visivel) {
        if (visivel) {
            delay(3000) 
            visivel = false
        }
    }

    Box(modifier = Modifier.fillMaxSize().padding(20.dp)) {
        if (visivel) {
            Surface(
                modifier = Modifier.align(Alignment.TopCenter).fillMaxWidth(),
                color = Color.DarkGray,
                elevation = 8.dp
            ) {
                Text(
                    text = mensagemExibida,
                    color = Color.White,
                    modifier = Modifier.padding(16.dp)
                )
            }
        }

        Column(
            modifier = Modifier.align(Alignment.Center),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            TextField(
                value = texto,
                onValueChange = { texto = it },
                placeholder = { Text("Escreva algo...") }
            )
            
            Spacer(modifier = Modifier.height(10.dp))

            Button(onClick = {
                if (texto.isNotBlank()) {
                    mensagemExibida = texto
                    visivel = true
                    texto = ""
                }
            }) {
                Text("Mostrar Notificação")
            }
        }
    }
}
