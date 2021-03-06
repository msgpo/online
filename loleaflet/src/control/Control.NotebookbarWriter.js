/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.NotebookbarWriter
 */

/* global _ */
L.Control.NotebookbarWriter = L.Control.Notebookbar.extend({

	getTabs: function() {
		return [
			{
				'text': _('~Home'),
				'id': '2',
				'name': 'HomeLabel',
				'context': 'default|Text'
			},
			{
				'text': _('~Insert'),
				'id': '3',
				'name': 'InsertLabel'
			},
			{
				'text': _('~Layout'),
				'id': '4',
				'name': 'LayoutLabel'
			},
			{
				'text': _('Reference~s'),
				'id': '5',
				'name': 'ReferencesLabel'
			},
			{
				'text': _('~Review'),
				'id': '6',
				'name': 'ReviewLabel'
			},
			{
				'text': _('~Table'),
				'id': '8',
				'name': 'TableLabel',
				'context': 'Table'
			}
		];
	},

	getHomeTab: function() {
		return {
			'id': '',
			'type': 'control',
			'text': '',
			'enabled': 'true',
			'children': [
				{
					'id': '',
					'type': 'container',
					'text': '',
					'enabled': 'true',
					'children': [
						{
							'id': 'NotebookBar',
							'type': 'grid',
							'text': '',
							'enabled': 'true',
							'children': [
								{
									'id': 'box',
									'type': 'container',
									'text': '',
									'enabled': 'true',
									'children': [
										{
											'id': 'ContextContainer',
											'type': 'tabcontrol',
											'text': '',
											'enabled': 'true',
											'children': [
												{
													'id': '',
													'type': 'pushbutton',
													'text': '',
													'enabled': 'true'
												},
												{
													'id': '',
													'type': 'toolbox',
													'text': '',
													'enabled': 'true',
													'children': [
														{
															'type': 'toolitem',
															'text': 'Menubar',
															'command': '.uno:Menubar'
														},
														{
															'type': 'toolitem',
															'text': 'Open',
															'command': '.uno:OpenFromWriter'
														},
														{
															'type': 'toolitem',
															'text': 'Save',
															'command': '.uno:Save'
														},
														{
															'type': 'toolitem',
															'text': 'Undo',
															'command': '.uno:Undo'
														},
														{
															'type': 'toolitem',
															'text': 'Redo',
															'command': '.uno:Redo'
														},
														{
															'type': 'toolitem',
															'text': 'Print',
															'command': '.uno:Print'
														}
													]
												},
												{
													'id': '',
													'type': 'tabpage',
													'text': '',
													'enabled': 'true',
													'children': [
														{
															'id': 'Home Tab',
															'type': 'container',
															'text': '',
															'enabled': 'true',
															'children': [
																{
																	'id': 'Home',
																	'type': 'container',
																	'text': '',
																	'enabled': 'true',
																	'children': [
																		{
																			'id': 'Home-Section-Clipboard',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'SectionBottom87',
																					'type': 'toolbox',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'type': 'toolitem',
																							'text': 'Paste',
																							'command': '.uno:Paste'
																						}
																					]
																				},
																				{
																					'id': 'GroupB9',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'LineA6',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Cut',
																									'command': '.uno:Cut'
																								}
																							]
																						},
																						{
																							'id': 'LineB7',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Copy',
																									'command': '.uno:Copy'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Style',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'separator104',
																					'type': 'fixedline',
																					'text': '',
																					'enabled': 'true'
																				},
																				{
																					'id': 'GroupB13',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'LineA7',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Clone',
																									'command': '.uno:FormatPaintbrush'
																								}
																							]
																						},
																						{
																							'id': 'LineB8',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Clear',
																									'command': '.uno:ResetAttributes'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Format',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'GroupB10',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'box76',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'font',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'id': '',
																											'type': 'borderwindow',
																											'text': '',
																											'enabled': 'true',
																											'children': [
																												{
																													'id': 'fontnamecombobox',
																													'type': 'combobox',
																													'text': 'Liberation Serif',
																													'enabled': 'true',
																													'children': [
																														{
																															'id': '',
																															'type': 'pushbutton',
																															'text': '',
																															'enabled': 'true'
																														},
																														{
																															'id': '',
																															'type': 'edit',
																															'text': 'Liberation Serif',
																															'enabled': 'true'
																														}
																													],
																													'entries': [
																														'Alef',
																														'Amiri',
																														'Amiri Quran',
																														'Baekmuk Batang',
																														'Baekmuk Dotum',
																														'Baekmuk Gulim',
																														'Baekmuk Headline',
																														'Bandal',
																														'Bangwool',
																														'Caladea',
																														'Cantarell',
																														'Carlito',
																														'David CLM',
																														'David Libre',
																														'DejaVu Math TeX Gyre',
																														'DejaVu Sans',
																														'DejaVu Sans Condensed',
																														'DejaVu Sans Light',
																														'DejaVu Sans Mono',
																														'DejaVu Serif',
																														'DejaVu Serif Condensed',
																														'Droid Arabic Kufi',
																														'Droid Arabic Naskh',
																														'Droid Naskh Shift Alt',
																														'Droid Sans',
																														'Droid Sans Armenian',
																														'Droid Sans Devanagari',
																														'Droid Sans Ethiopic',
																														'Droid Sans Fallback',
																														'Droid Sans Georgian',
																														'Droid Sans Hebrew',
																														'Droid Sans Japanese',
																														'Droid Sans Mono',
																														'Droid Sans Tamil',
																														'Droid Sans Thai',
																														'Droid Serif',
																														'East Syriac Adiabene',
																														'East Syriac Ctesiphon',
																														'EmojiOne Color',
																														'Estrangelo Antioch',
																														'Estrangelo Edessa',
																														'Estrangelo Midyat',
																														'Estrangelo Nisibin',
																														'Estrangelo Nisibin Outline',
																														'Estrangelo Quenneshrin',
																														'Estrangelo Talada',
																														'Estrangelo TurAbdin',
																														'Eunjin',
																														'Eunjin Nakseo',
																														'Frank Ruehl CLM',
																														'Frank Ruhl Hofshi',
																														'Gentium Basic',
																														'Gentium Book Basic',
																														'Goha-Tibeb Zemen',
																														'Guseul',
																														'KacstBook',
																														'KacstOffice',
																														'Karla',
																														'Khmer OS',
																														'Khmer OS Battambang',
																														'Khmer OS Bokor',
																														'Khmer OS Content',
																														'Khmer OS Fasthand',
																														'Khmer OS Freehand',
																														'Khmer OS Metal Chrieng',
																														'Khmer OS Muol',
																														'Khmer OS Muol Light',
																														'Khmer OS Muol Pali',
																														'Khmer OS Siemreap',
																														'Khmer OS System',
																														'Liberation Mono',
																														'Liberation Sans',
																														'Liberation Sans Narrow',
																														'Liberation Serif',
																														'Linux Biolinum G',
																														'Linux Libertine Display G',
																														'Linux Libertine G',
																														'LM Mono 10',
																														'LM Mono 12',
																														'LM Mono 8',
																														'LM Mono 9',
																														'LM Mono Caps 10',
																														'LM Mono Light 10',
																														'LM Mono Light Cond 10',
																														'LM Mono Prop 10',
																														'LM Mono Prop Light 10',
																														'LM Mono Slanted 10',
																														'LM Roman 10',
																														'LM Roman 12',
																														'LM Roman 17',
																														'LM Roman 5',
																														'LM Roman 6',
																														'LM Roman 7',
																														'LM Roman 8',
																														'LM Roman 9',
																														'LM Roman Caps 10',
																														'LM Roman Demi 10',
																														'LM Roman Dunhill 10',
																														'LM Roman Slanted 10',
																														'LM Roman Slanted 12',
																														'LM Roman Slanted 17',
																														'LM Roman Slanted 8',
																														'LM Roman Slanted 9',
																														'LM Roman Unslanted 10',
																														'LM Sans 10',
																														'LM Sans 12',
																														'LM Sans 17',
																														'LM Sans 8',
																														'LM Sans 9',
																														'LM Sans Demi Cond 10',
																														'LM Sans Quot 8',
																														'Luxi Mono',
																														'Luxi Sans',
																														'Luxi Serif',
																														'Miriam CLM',
																														'Miriam Libre',
																														'Miriam Mono CLM',
																														'Nachlieli CLM',
																														'Noto Color Emoji',
																														'Noto Kufi Arabic',
																														'Noto Mono',
																														'Noto Naskh Arabic',
																														'Noto Naskh Arabic UI',
																														'Noto Sans',
																														'Noto Sans Arabic',
																														'Noto Sans Arabic UI',
																														'Noto Sans Armenian',
																														'Noto Sans Blk',
																														'Noto Sans Cond',
																														'Noto Sans Cond Blk',
																														'Noto Sans Cond ExtBd',
																														'Noto Sans Cond ExtLt',
																														'Noto Sans Cond Light',
																														'Noto Sans Cond Med',
																														'Noto Sans Cond SemBd',
																														'Noto Sans Cond Thin',
																														'Noto Sans ExtBd',
																														'Noto Sans ExtCond',
																														'Noto Sans ExtCond Blk',
																														'Noto Sans ExtCond ExtBd',
																														'Noto Sans ExtCond ExtLt',
																														'Noto Sans ExtCond Light',
																														'Noto Sans ExtCond Med',
																														'Noto Sans ExtCond SemBd',
																														'Noto Sans ExtCond Thin',
																														'Noto Sans ExtLt',
																														'Noto Sans Georgian',
																														'Noto Sans Hebrew',
																														'Noto Sans JP Bold',
																														'Noto Sans JP Regular',
																														'Noto Sans KR Bold',
																														'Noto Sans KR Regular',
																														'Noto Sans Lao',
																														'Noto Sans Light',
																														'Noto Sans Lisu',
																														'Noto Sans Med',
																														'Noto Sans SC Bold',
																														'Noto Sans SC Regular',
																														'Noto Sans SemBd',
																														'Noto Sans SemCond',
																														'Noto Sans SemCond Blk',
																														'Noto Sans SemCond ExtBd',
																														'Noto Sans SemCond ExtLt',
																														'Noto Sans SemCond Light',
																														'Noto Sans SemCond Med',
																														'Noto Sans SemCond SemBd',
																														'Noto Sans SemCond Thin',
																														'Noto Sans TC Bold',
																														'Noto Sans TC Regular',
																														'Noto Sans Thin',
																														'Noto Serif',
																														'Noto Serif Armenian',
																														'Noto Serif Cond',
																														'Noto Serif Georgian',
																														'Noto Serif Hebrew',
																														'Noto Serif Lao',
																														'Noto Serif Light',
																														'Open Sans',
																														'Open Sans Condensed',
																														'Open Sans Condensed Light',
																														'Open Sans Extrabold',
																														'Open Sans Light',
																														'Open Sans Semibold',
																														'OpenDyslexic',
																														'OpenSymbol',
																														'Reem Kufi',
																														'Roboto',
																														'Roboto Black',
																														'Roboto Condensed',
																														'Roboto Condensed Light',
																														'Roboto Light',
																														'Roboto Medium',
																														'Roboto Slab',
																														'Roboto Thin',
																														'Rubik',
																														'Scheherazade',
																														'Serto Batnan',
																														'Serto Jerusalem',
																														'Serto Jerusalem Outline',
																														'Serto Kharput',
																														'Serto Malankara',
																														'Serto Mardin',
																														'Serto Urhoy',
																														'Source Code Pro',
																														'Source Code Pro Black',
																														'Source Code Pro ExtraLight',
																														'Source Code Pro Light',
																														'Source Code Pro Medium',
																														'Source Code Pro Semibold',
																														'Source Sans Pro',
																														'Source Sans Pro Black',
																														'Source Sans Pro ExtraLight',
																														'Source Sans Pro Light',
																														'Source Sans Pro Semibold',
																														'Source Serif Pro',
																														'Source Serif Pro Black',
																														'Source Serif Pro ExtraLight',
																														'Source Serif Pro Light',
																														'Source Serif Pro Semibold',
																														'STIXGeneral'
																													],
																													'selectedCount': '1',
																													'selectedEntries': [
																														'73'
																													],
																													'command': '.uno:CharFontName'
																												}
																											]
																										}
																									]
																								},
																								{
																									'id': 'fontheight',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'id': 'fontsize',
																											'type': 'combobox',
																											'text': '12 pt',
																											'enabled': 'true',
																											'children': [
																												{
																													'id': '',
																													'type': 'pushbutton',
																													'text': '',
																													'enabled': 'true'
																												},
																												{
																													'id': '',
																													'type': 'edit',
																													'text': '12 pt',
																													'enabled': 'true'
																												},
																												{
																													'id': '',
																													'type': 'borderwindow',
																													'text': '',
																													'enabled': 'true',
																													'children': [
																														{
																															'id': '',
																															'type': 'edit',
																															'text': '',
																															'enabled': 'true'
																														}
																													]
																												}
																											],
																											'entries': [
																												'6 pt',
																												'7 pt',
																												'8 pt',
																												'9 pt',
																												'10 pt',
																												'10.5 pt',
																												'11 pt',
																												'12 pt',
																												'13 pt',
																												'14 pt',
																												'15 pt',
																												'16 pt',
																												'18 pt',
																												'20 pt',
																												'22 pt',
																												'24 pt',
																												'26 pt',
																												'28 pt',
																												'32 pt',
																												'36 pt',
																												'40 pt',
																												'44 pt',
																												'48 pt',
																												'54 pt',
																												'60 pt',
																												'66 pt',
																												'72 pt',
																												'80 pt',
																												'88 pt',
																												'96 pt'
																											],
																											'selectedCount': '1',
																											'selectedEntries': [
																												'7'
																											],
																											'command': '.uno:FontHeight'
																										}
																									]
																								},
																								{
																									'id': 'ExtTop6',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Increase',
																											'command': '.uno:Grow'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Decrease',
																											'command': '.uno:Shrink'
																										}
																									]
																								}
																							],
																							'vertical': 'false'
																						},
																						{
																							'id': 'GroupB11',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'ExtTop4',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Bold',
																											'command': '.uno:Bold'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Italic',
																											'command': '.uno:Italic'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Underline',
																											'command': '.uno:Underline'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Strikethrough',
																											'command': '.uno:Strikeout'
																										}
																									]
																								},
																								{
																									'id': 'separator5',
																									'type': 'fixedline',
																									'text': '',
																									'enabled': 'true'
																								},
																								{
																									'id': 'ExtTop5',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Subscript',
																											'command': '.uno:SubScript'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Superscript',
																											'command': '.uno:SuperScript'
																										}
																									]
																								},
																								{
																									'id': 'separator78',
																									'type': 'fixedline',
																									'text': '',
																									'enabled': 'true'
																								},
																								{
																									'id': 'ExtTop2',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Highlight Color',
																											'command': '.uno:BackColor'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Font Color',
																											'command': '.uno:Color'
																										}
																									]
																								}
																							],
																							'vertical': 'false'
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Paragraph',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'separator102',
																					'type': 'fixedline',
																					'text': '',
																					'enabled': 'true'
																				},
																				{
																					'id': 'GroupB14',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'GroupB16',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'SectionBottom91',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Bullets',
																											'command': '.uno:DefaultBullet'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Numbering',
																											'command': '.uno:DefaultNumbering'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Outline',
																											'command': '.uno:SetOutline'
																										}
																									]
																								},
																								{
																									'id': 'separator68',
																									'type': 'fixedline',
																									'text': '',
																									'enabled': 'true'
																								}
																							],
																							'vertical': 'false'
																						},
																						{
																							'id': 'GroupB15',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'SectionBottom13',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Left',
																											'command': '.uno:LeftPara'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Center',
																											'command': '.uno:CenterPara'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Right',
																											'command': '.uno:RightPara'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Justified',
																											'command': '.uno:JustifyPara'
																										}
																									]
																								},
																								{
																									'id': 'separator8',
																									'type': 'fixedline',
																									'text': '',
																									'enabled': 'true'
																								}
																							],
																							'vertical': 'false'
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Paragraph1',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'GroupB19',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'GroupB93',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'SectionBottom81',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Increase',
																											'command': '.uno:IncrementIndent'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Decrease',
																											'command': '.uno:DecrementIndent'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Formatting Marks',
																											'command': '.uno:ControlCodes'
																										}
																									]
																								},
																								{
																									'id': 'SectionBottom93',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Left-To-Right',
																											'command': '.uno:ParaLeftToRight'
																										}
																									]
																								}
																							],
																							'vertical': 'false'
																						},
																						{
																							'id': 'GroupB94',
																							'type': 'container',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': 'SectionBottom125',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Line Spacing',
																											'command': '.uno:LineSpacing'
																										},
																										{
																											'type': 'toolitem',
																											'text': 'Background Color',
																											'command': '.uno:BackgroundColor'
																										}
																									]
																								},
																								{
																									'id': 'SectionBottom130',
																									'type': 'toolbox',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'type': 'toolitem',
																											'text': 'Right-To-Left',
																											'command': '.uno:ParaRightToLeft'
																										}
																									]
																								}
																							],
																							'vertical': 'false'
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Style2',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'separator10',
																					'type': 'fixedline',
																					'text': '',
																					'enabled': 'true'
																				},
																				{
																					'id': 'GroupB17',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'SectionBottom5',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Styles',
																									'command': '.uno:DesignerDialog'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Style3',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'GroupB80',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'SectionBottom127',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'id': '',
																									'type': 'control',
																									'text': '',
																									'enabled': 'true',
																									'children': [
																										{
																											'id': '',
																											'type': 'container',
																											'text': '',
																											'enabled': 'true',
																											'children': [
																												{
																													'id': 'ApplyStyleBox',
																													'type': 'container',
																													'text': '',
																													'enabled': 'true',
																													'children': [
																														{
																															'id': '',
																															'type': 'container',
																															'text': '',
																															'enabled': 'true',
																															'children': [
																																{
																																	'id': 'stylescontainer',
																																	'type': 'container',
																																	'text': '',
																																	'enabled': 'true',
																																	'children': [
																																		{
																																			'id': 'style1',
																																			'type': 'drawingarea',
																																			'text': '',
																																			'loading': 'true',
																																			'enabled': 'true',
																																			'image': 'data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABACAYAAADs39J0AAAAr0lEQVR4nO3RMREAIBDAMIb3bxlYUUCHREHvOvtaZMzvAF6GxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgScwDMKAT9P9vfmAAAAABJRU5ErkJggg=='
																																		},
																																		{
																																			'id': 'style2',
																																			'type': 'drawingarea',
																																			'text': '',
																																			'loading': 'true',
																																			'enabled': 'true',
																																			'image': 'data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABACAYAAADs39J0AAAAr0lEQVR4nO3RMREAIBDAMIb3bxlYUUCHREHvOvtaZMzvAF6GxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgScwDMKAT9P9vfmAAAAABJRU5ErkJggg=='
																																		},
																																		{
																																			'id': 'style3',
																																			'type': 'drawingarea',
																																			'text': '',
																																			'loading': 'true',
																																			'enabled': 'true',
																																			'image': 'data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABACAYAAADs39J0AAAAr0lEQVR4nO3RMREAIBDAMIb3bxlYUUCHREHvOvtaZMzvAF6GxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgScwDMKAT9P9vfmAAAAABJRU5ErkJggg=='
																																		},
																																		{
																																			'id': 'style4',
																																			'type': 'drawingarea',
																																			'text': '',
																																			'loading': 'true',
																																			'enabled': 'true',
																																			'image': 'data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABACAYAAADs39J0AAAAr0lEQVR4nO3RMREAIBDAMIb3bxlYUUCHREHvOvtaZMzvAF6GxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgSY0iMITGGxBgScwDMKAT9P9vfmAAAAABJRU5ErkJggg=='
																																		}
																																	],
																																	'vertical': 'false'
																																},
																																{
																																	'id': '',
																																	'type': 'container',
																																	'text': '',
																																	'enabled': 'true',
																																	'children': [
																																		{
																																			'id': 'uptoolbar',
																																			'type': 'toolbox',
																																			'text': '',
																																			'enabled': 'true',
																																			'children': [
																																				{
																																					'type': 'toolitem',
																																					'text': 'Previous',
																																					'command': 'up'
																																				}
																																			]
																																		},
																																		{
																																			'id': 'downtoolbar',
																																			'type': 'toolbox',
																																			'text': '',
																																			'enabled': 'true',
																																			'children': [
																																				{
																																					'type': 'toolitem',
																																					'text': 'Next',
																																					'command': 'down'
																																				}
																																			]
																																		}
																																	],
																																	'vertical': 'true'
																																}
																															],
																															'vertical': 'false'
																														}
																													],
																													'vertical': 'false'
																												}
																											],
																											'vertical': 'true'
																										}
																									]
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Style4',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'GroupB86',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'SectionBottom138',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Update',
																									'command': '.uno:StyleUpdateByExample'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Edit',
																									'command': '.uno:EditStyle'
																								}
																							]
																						},
																						{
																							'id': 'SectionBottom141',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Emphasis',
																									'command': '.uno:StyleApply?Style:string=Emphasis&FamilyName:string=CharacterStyles'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Strong Emphasis',
																									'command': '.uno:StyleApply?Style:string=Strong Emphasis&FamilyName:string=CharacterStyles'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-Insert',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'separator107',
																					'type': 'fixedline',
																					'text': '',
																					'enabled': 'true'
																				},
																				{
																					'id': 'GroupB20',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'LineA8',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Table',
																									'command': '.uno:InsertTable'
																								}
																							]
																						},
																						{
																							'id': 'LineB9',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Image',
																									'command': '.uno:InsertGraphic'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Page Break',
																									'command': '.uno:InsertPagebreak'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Symbol',
																									'command': '.uno:CharmapControl'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		},
																		{
																			'id': 'Home-Section-View',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'separator67',
																					'type': 'fixedline',
																					'text': '',
																					'enabled': 'true'
																				},
																				{
																					'id': 'GroupB83',
																					'type': 'container',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'id': 'LineA34',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Zoom',
																									'command': '.uno:Zoom'
																								}
																							]
																						},
																						{
																							'id': 'LineB35',
																							'type': 'toolbox',
																							'text': '',
																							'enabled': 'true',
																							'children': [
																								{
																									'type': 'toolitem',
																									'text': 'Comment',
																									'command': '.uno:InsertAnnotation'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Print Preview',
																									'command': '.uno:PrintPreview'
																								},
																								{
																									'type': 'toolitem',
																									'text': 'Navigator',
																									'command': '.uno:Navigator'
																								}
																							]
																						}
																					],
																					'vertical': 'true'
																				}
																			],
																			'vertical': 'false'
																		}
																	],
																	'vertical': 'false'
																},
																{
																	'id': 'separator9',
																	'type': 'fixedline',
																	'text': '',
																	'enabled': 'true'
																},
																{
																	'id': 'Home-Menu',
																	'type': 'container',
																	'text': '',
																	'enabled': 'true',
																	'children': [
																		{
																			'id': 'PasteBox1',
																			'type': 'container',
																			'text': '',
																			'enabled': 'true',
																			'children': [
																				{
																					'id': 'Home-HomeButton:Menu Home',
																					'type': 'menubutton',
																					'text': '~Home',
																					'enabled': 'true'
																				},
																				{
																					'id': 'SectionBottom10',
																					'type': 'toolbox',
																					'text': '',
																					'enabled': 'true',
																					'children': [
																						{
																							'type': 'toolitem',
																							'text': 'Find',
																							'command': 'vnd.sun.star.findbar:FocusToFindbar'
																						}
																					]
																				}
																			],
																			'vertical': 'true'
																		}
																	],
																	'vertical': 'false'
																}
															],
															'vertical': 'false'
														}
													]
												}
											],
											'tabs': [
												{
													'text': '~File',
													'id': '1',
													'name': 'FileLabel'
												},
												{
													'text': '~Home',
													'id': '2',
													'name': 'HomeLabel'
												},
												{
													'text': '~Insert',
													'id': '3',
													'name': 'InsertLabel'
												},
												{
													'text': '~Layout',
													'id': '4',
													'name': 'LayoutLabel'
												},
												{
													'text': 'Reference~s',
													'id': '5',
													'name': 'ReferencesLabel'
												},
												{
													'text': '~Review',
													'id': '6',
													'name': 'ReviewLabel'
												},
												{
													'text': '~View',
													'id': '7',
													'name': 'ViewLabel'
												},
												{
													'text': '~Table',
													'id': '8',
													'name': 'TableLabel'
												},
												{
													'text': 'Ima~ge',
													'id': '9',
													'name': 'ImageLabel'
												},
												{
													'text': '~Draw',
													'id': '10',
													'name': 'DrawLabel'
												},
												{
													'text': '~Object',
													'id': '11',
													'name': 'ObjectLabel'
												},
												{
													'text': '~Media',
													'id': '12',
													'name': 'MediaLabel'
												},
												{
													'text': '~Print',
													'id': '13',
													'name': 'PrintLabel'
												},
												{
													'text': 'Fo~rm',
													'id': '14',
													'name': 'FormLabel'
												},
												{
													'text': 'E~xtension',
													'id': '15',
													'name': 'ExtensionLabel'
												},
												{
													'text': '~Tools',
													'id': '16',
													'name': 'ToolsLabel'
												}
											],
											'selected': '2'
										}
									],
									'vertical': 'true',
									'left': '0',
									'top': '0'
								}
							]
						}
					],
					'vertical': 'true'
				}
			]
		};
	}
});

L.control.notebookbarWriter = function (options) {
	return new L.Control.NotebookbarWriter(options);
};
