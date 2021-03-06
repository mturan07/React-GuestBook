USE [dbGuestbook]
GO
/*
CREATE USER [uGuestbook] FOR LOGIN [uGuestbook] WITH DEFAULT_SCHEMA=[dbo]
GO
*/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Entries](
	[Id] [int] NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Email] [nvarchar](100) NULL,
	[Message] [nvarchar](max) NULL,
	[InsertDate] [datetime] NULL,
 CONSTRAINT [PK_Entries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (1, N'Adam', N'Sandler', N'adamsandler@hollywood.com', N'Hi I''m here right know', CAST(0x0000AB23009450C0 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (2, N'Brad', N'Pitt', N'bradpitt@hollywood.com', N'Today is a good day', CAST(0x0000AB24009450C0 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (3, N'Tom', N'Hanks', N'noname@hollywood.com', N'Lorem ipsum dolor sit amet', CAST(0x0000AB25009450C0 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (4, N'Will', N'Smith', N'noname@hollywood.com', N'Lorem ipsum dolor sit amet', CAST(0x0000AB26009450C0 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (5, N'Bruce', N'Wills', N'noname@hollywood.com', N'Lorem ipsum dolor sit amet', CAST(0x0000AB2600A4CB80 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (6, N'Tom', N'Cruse', N'noname@hollywood.com', N'Lorem ipsum dolor sit amet', CAST(0x0000AB26009C8E20 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (24, N'Bedirhan', N'Turan', N'bedirhannn@gmail.com', N'dfsad fsadfsadfsdf ', CAST(0x0000AB3100D49D00 AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (25, N'Murat', N'Turan', N'mturan.tr@gmail.com', N'sdfdfsdfsdf', CAST(0x0000AB3100F720CF AS DateTime))
GO
INSERT [dbo].[Entries] ([Id], [FirstName], [LastName], [Email], [Message], [InsertDate]) VALUES (28, N'Jeroen', N'Krabbe', N'jeroenkrabbe@netherland.nl', N'fasdf', CAST(0x0000AB31012EE880 AS DateTime))
GO
USE [master]
GO
ALTER DATABASE [dbGuestbook] SET  READ_WRITE 
GO
