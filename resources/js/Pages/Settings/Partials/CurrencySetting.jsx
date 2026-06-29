import React from 'react';
import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { formatCurrency } from '../../../lib/currencyFormatter';

export default function CurrencySetting({ handleSubmit, settingFormData, handleChange }) {

    const previewNumbers = [1500, 1500.50, -1500, -1500.50];

    const getPreviewSettings = () => ({
        currency_symbol: settingFormData.currency_symbol || '$',
        currency_code: settingFormData.currency_code || 'COP',
        symbol_position: settingFormData.symbol_position || 'before',
        decimal_separator: settingFormData.decimal_separator || ',',
        thousands_separator: settingFormData.thousands_separator || '.',
        decimal_places: settingFormData.decimal_places || '0',
        negative_format: settingFormData.negative_format || 'minus',
        show_currency_code: settingFormData.show_currency_code || 'yes',
    });

    return (
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            method="post"
        >
            <input type="hidden" name="setting_type" value={'currency'} />
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{ width: { xs: "100%", sm: "60%" } }}
                >
                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2, width: '100%' }}>
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                width: "100%",
                            }}
                            spacing={2}
                        >
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Símbolo de Moneda"
                                    name="currency_symbol"
                                    required
                                    placeholder="ej., $, €, Rs"
                                    value={settingFormData.currency_symbol || ''}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Código de Moneda"
                                    name="currency_code"
                                    required
                                    placeholder="ej., COP, USD, EUR"
                                    value={settingFormData.currency_code || ''}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Posición del Símbolo"
                                    name="symbol_position"
                                    value={settingFormData.symbol_position || 'before'}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value="before">Antes del Monto ({settingFormData.currency_symbol || '$'} 1,500.00)</MenuItem>
                                    <MenuItem value="after">Después del Monto (1,500.00 {settingFormData.currency_symbol || '$'})</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Separador Decimal"
                                    name="decimal_separator"
                                    value={settingFormData.decimal_separator || ','}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value=".">Punto (1,500.00)</MenuItem>
                                    <MenuItem value=",">Coma (1.500,00)</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Separador de Miles"
                                    name="thousands_separator"
                                    value={settingFormData.thousands_separator || '.'}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value=",">Coma (1,500.00)</MenuItem>
                                    <MenuItem value=".">Punto (1.500,00)</MenuItem>
                                    <MenuItem value=" ">Espacio (1 500.00)</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Decimales"
                                    name="decimal_places"
                                    value={settingFormData.decimal_places || '0'}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value="0">0 ({settingFormData.currency_symbol || '$'} 1500)</MenuItem>
                                    <MenuItem value="2">2 ({settingFormData.currency_symbol || '$'} 1500.00)</MenuItem>
                                    <MenuItem value="3">3 ({settingFormData.currency_symbol || '$'} 1500.000)</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Formato de Números Negativos"
                                    name="negative_format"
                                    value={settingFormData.negative_format || 'minus'}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value="minus">Con Signo Menos (-{settingFormData.currency_symbol || '$'} 1,500.00)</MenuItem>
                                    <MenuItem value="parentheses">Paréntesis (({settingFormData.currency_symbol || '$'} 1,500.00))</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Mostrar Código de Moneda"
                                    name="show_currency_code"
                                    value={settingFormData.show_currency_code || 'yes'}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value="yes">Sí ({settingFormData.currency_symbol || '$'} ({settingFormData.currency_code || 'COP'}) 1,500.00)</MenuItem>
                                    <MenuItem value="no">No ({settingFormData.currency_symbol || '$'} 1,500.00)</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Grid
                        size={12}
                        sx={{ display: "flex", justifyContent: "end" }}
                    >
                        <Button
                            type="submit"
                            variant="outlined"
                            size="large"
                            color="success"
                            fullWidth
                        >
                            ACTUALIZAR CONFIGURACIÓN DE MONEDA
                        </Button>
                    </Grid>

                    {/* Currency Preview Section */}
                    <Grid size={12}>
                        <Paper elevation={3} sx={{ padding: 3, marginTop: 3, width: '100%', backgroundColor: '#f5f5f5' }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                                Vista Previa del Formato
                            </Typography>
                            <Grid container spacing={2}>
                                {previewNumbers.map((num, index) => (
                                    <Grid size={{ xs: 6, sm: 6 }} key={index}>
                                        <Box sx={{
                                            padding: 1.5,
                                            backgroundColor: num < 0 ? '#fff3e0' : '#e8f5e9',
                                            borderRadius: 1,
                                            border: '1px solid #ddd'
                                        }}>
                                            <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                                                {num < 0 ? 'Negativo' : 'Positivo'}
                                            </Typography>
                                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: num < 0 ? '#d32f2f' : '#388e3c' }}>
                                                {formatCurrency(num, getPreviewSettings())}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}
