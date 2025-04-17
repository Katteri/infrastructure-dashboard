SELECT
  datetime, cpu_utilization, memory_utilization, disk_utilization,
  gn.group_id,
  m.node_id, caption, status, interface, admin
FROM metrics m
	JOIN nodes n ON(m.node_id = n.id)
	JOIN groups_nodes gn ON(m.node_id = gn.node_id)
