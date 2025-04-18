SELECT
	group_id, group_caption,
	node_id, node_caption, node_color, node_description,
	interface_caption,
	s2.color as interface_color,
	s2.description as interface_description,
	application_caption,
	firstname, lastname, email	
FROM
	(SELECT
	  g.id as group_id,
	  g.caption as group_caption,
	  n.id as node_id,
	  n.caption as node_caption,
	  i.caption as interface_caption,
	  i.status as interface_status,
	  a.caption as application_caption,
	  u.firstname, u.lastname, u.email,
	  s.color as node_color,
	  s.description as node_description
	FROM groups g
		LEFT JOIN groups_nodes gn ON(g.id = gn.group_id)
		LEFT JOIN nodes n ON(gn.node_id = n.id)
		LEFT JOIN interfaces i ON(n.interface = i.id)
		LEFT JOIN nodes_applications na ON(n.id = na.node_id)
		LEFT JOIN applications a ON(na.application_id = a.id)
		LEFT JOIN users u ON(n.admin = u.id)
		LEFT JOIN statuses s ON(n.status = s.id)) t1
	LEFT JOIN statuses s2 ON (t1.interface_status = s2.id)
